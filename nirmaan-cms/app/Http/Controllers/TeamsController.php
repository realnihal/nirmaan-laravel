<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeamsController extends Controller
{
    public function getTeams()
    {
        $teamMates= DB::select("SELECT * FROM team_mates");
        return view("cms.dashboard.teams",compact('teamMates'));
    }
    public function addTeamMate(Request $request){
        $file = $request->file('profile_image');
        $fileName = $file->getClientOriginalName();
        $filePath = $file->storeAs($fileName);

        DB::table('team_mates')->insert([
            'name'=>$request->team_mate_name,
            'tagline'=>$request->tagline,
            'designation'=>$request->designation,
            'description'=>$request->description,
            'profile_image'=>$filePath,
        ]);
        return redirect()->back();
    }

    public function deleteTeamMate($teamMateId){
        $teamMates= DB::select("DELETE FROM team_mates WHERE id=$teamMateId");
        return redirect()->back();
    }
}
