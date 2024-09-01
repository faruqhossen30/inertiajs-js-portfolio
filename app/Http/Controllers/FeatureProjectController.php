<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeatureProjectController extends Controller
{
    public function FeatureProject()
    {
        $portfolios = Portfolio::paginate(6);
        return Inertia::render('FeatureProject', ['portfolios' => $portfolios]);
    }
}
