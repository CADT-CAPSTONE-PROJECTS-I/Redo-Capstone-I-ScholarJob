<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDetailsToOrganizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('organizations', function (Blueprint $table) {
            $table->string('email')->nullable();
            $table->text('about')->nullable();
            $table->string('location')->nullable();
            $table->text('offer_policy')->nullable();
            $table->date('founded')->nullable();
            $table->string('hour_of_operation')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('organizations', function (Blueprint $table) {
            $table->dropColumn(['email', 'about', 'location', 'offer_policy', 'founded', 'hour_of_operation']);
        });
    }
}