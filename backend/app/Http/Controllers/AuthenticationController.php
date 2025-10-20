<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthenticationController extends Controller
{
    public function authentication(Request $request){
       $validate = Validator::make($request->all(), [
           'email' => 'required|email',
           'password' => 'required',
       ]);

       if ($validate->fails()) {
           return response()->json([
               'status' => 'error',
               'message' => $validate->errors()->first(),
           ]);
       }else{
        $credentials=[
            'email'=>$request->email,
            'password'=>$request->password,
        ];
    
        if (Auth::attempt($credentials)) {
            $user = User::find(Auth::user()->id);
            $token = $user->createToken('token')->plainTextToken;
            return response()->json([
                'status' => 'true',
                'token'=>$token,
                'id'=> Auth::user()->id,
                'name'=> Auth::user()->name,
                'email'=> Auth::user()->email,
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Either email or password is incorrect',
            ]);
        }
           
       }
    }



    public function logout(Request $request){
        User::find(Auth::user()->id)->tokens()->delete();
        return response()->json([
            'status' => 'true',
            'message' => 'Logout successfully',
        ]);
    }
}
