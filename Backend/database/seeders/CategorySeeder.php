<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            ['title' => 'Software Development'],
            ['title' => 'Data Science'],
            ['title' => 'Project Management'],
            ['title' => 'Quality Assurance'],
            ['title' => 'Human Resources'],
            ['title' => 'Marketing'],
            ['title' => 'Customer Support'],
            ['title' => 'Sales'],
            ['title' => 'Design'],
            ['title' => 'DevOps'],
        ]);
    }
}