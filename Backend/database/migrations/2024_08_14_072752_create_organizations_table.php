<?php


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationsTable extends Migration
{
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->id('id');
            $table->string('name')->nullable();
            $table->string('industry_type')->nullable();
            $table->string('website')->nullable();
            $table->string('address')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('contact')->nullable();
            $table->string('image')->nullable(); 
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('organizations');
    }
}