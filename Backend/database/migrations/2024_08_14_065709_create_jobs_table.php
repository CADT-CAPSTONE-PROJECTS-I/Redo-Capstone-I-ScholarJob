<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateJobsTable extends Migration
{
    public function up()
    {
        Schema::create('jobs', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('category_id')->constrained('categories')->nullable();
            $table->foreignId('organization_id')->constrained('organizations')->nullable();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->string('age_require')->nullable();
            $table->string('qualification')->nullable();
            $table->string('salary')->nullable();
            $table->timestamp('deadline')->nullable();
            $table->string('available_position')->nullable();
            $table->timestamp('working_day_from')->nullable();
            $table->timestamp('working_day_to')->nullable();
            $table->string('contact')->nullable();
            $table->string('image')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('jobs');
    }
}