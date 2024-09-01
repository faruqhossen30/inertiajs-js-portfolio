<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ReviewpageController extends Controller
{
   public function ReviewPage(){


    return Inertia::render('Reviewpage');
   }
}
