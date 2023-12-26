<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class AboutStatsController extends Controller
{
    public function index(){
        if (Session::has('user_id')) {
            $data = DB::select("SELECT * FROM about_stats")[0];
            return view("CMS.Dashboard.stats",compact('data'));
        } else {
            return redirect('/login');
        }
    }

    public function updateAboutStats(Request $request) {
        dd($request);
        // DB::table("about_stats")
        //     ->where()

    }
}
