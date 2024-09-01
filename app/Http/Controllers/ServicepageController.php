<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class ServicepageController extends Controller
{
    function index() : Response {
        $services = Service::paginate(6);
        return Inertia::render('ServicePage',['services'=>  $services]);
    }

    function SingleService() : Response {
        return Inertia::render('Service');
    }
}
