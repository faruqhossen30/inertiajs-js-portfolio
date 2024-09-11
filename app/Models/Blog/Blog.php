<?php

namespace App\Models\Blog;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = [

        'title',
        'slug',
        'short_description',
        'description',
        'thumbnail',
        'user_id',
        'Category_id',
        'meta_title',
        'meta_description',
        'meta_tag',
        'status'

    ];

    public function categories(){
        return $this->belongsToMany(Category::class,'blog_categories');
    }
}
