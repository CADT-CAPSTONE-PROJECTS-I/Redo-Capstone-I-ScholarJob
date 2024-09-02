<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('client_id')->nullable();
            $table->string('name')->nullable();
            $table->string('position')->nullable();
            $table->integer('phone_number')->nullable();
            $table->string('email')->nullable();
            $table->text('address')->nullable();
            $table->string('hard_skill')->nullable();
            $table->string('soft_skill')->nullable();
            $table->string('language')->nullable();
            $table->string('image')->nullable();
            $table->text('about')->nullable();
            $table->text('education')->nullable();
            $table->string('experience')->nullable();
            $table->string('reference')->nullable();
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resumes');
    }
};