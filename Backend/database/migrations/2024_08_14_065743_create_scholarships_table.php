<?php

// database/migrations/xxxx_xx_xx_xxxxxx_create_scholarships_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateScholarshipsTable extends Migration
{
    public function up()
    {
        Schema::create('scholarships', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('organization_id')->constrained('organizations')->nullable();
            $table->string('degree')->nullable();
            $table->string('eligibility')->nullable();
            $table->string('qualification')->nullable();
            $table->timestamp('deadline')->nullable();
            $table->string('offer')->nullable();
            $table->string('award')->nullable();
            $table->string('available_position')->nullable();
            $table->string('image')->nullable(); 
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('scholarships');
    }
}