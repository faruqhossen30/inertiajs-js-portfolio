<?php

namespace App\Http\Controllers\Admin\Blog;

use App\Http\Controllers\Controller;
use App\Models\Blog\Blog;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Str;
class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blogs = Blog::paginate(10);
        return Inertia::render('Admin/Blog/Index', ['blogs' => $blogs]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::get();
        return Inertia::render('Admin/Blog/Create', ['categories' => $categories]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // return $request->all();



        // $request->validate([
        //     'title' => 'required'
        // ]);

        $data = [
            'title'             => $request->title,
            'slug'              => Str::slug($request->title),
            'description'       => $request->description,
            'short_description' => $request->short_description,
            'user_id'           => Auth::user()->id,
            'meta_title'        => $request->meta_title,
            'meta_description'  => $request->meta_description,
            'meta_tag'          => $request->meta_description,
            'status'            => $request->status,
        ];
        if ($request->file('thumbnail')) {
            $file_name = $request->file('thumbnail')->store('blog');
            $data['thumbnail'] = $file_name;
        }

        $blogs=  Blog::create($data);
        $blogs->categories()->attach($request->category_ids);
        return to_route('blog.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $blog = Blog::where('id', $id)->first();
        $categories = Category::get();
        return Inertia::render('Admin/Blog/Edit', ['blog' => $blog,'categories' => $categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
