<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use function Termwind\render;

class Post extends Controller
{
    public function displaynew()
    {
        return Inertia::render('Post/NewComponent');
    }
}
