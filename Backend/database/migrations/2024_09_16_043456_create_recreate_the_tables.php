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
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('role_id')->nullable();
            $table->boolean('is_superadmin')->default(0);
        });

        Schema::create('categories', function (Blueprint $table) {
            $table->id('id');
            $table->string('title')->nullable();
            $table->timestamps();
        });

        Schema::create('organizations', function (Blueprint $table) {
            $table->id('id');
            $table->string('name')->nullable();
            $table->string('industry_type')->nullable();
            $table->string('website')->nullable();
            $table->string('address')->nullable();
            $table->string('phone_number')->nullable();
            $table->string('contact')->nullable();
            $table->string('image')->nullable(); 
            $table->string('email')->nullable();
            $table->text('about')->nullable();
            $table->string('location')->nullable();
            $table->text('offer_policy')->nullable();
            $table->date('founded')->nullable();
            $table->string('hour_of_operation')->nullable();
            $table->timestamps();
        });

        Schema::create('jobs', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('category_id')->nullable();
            $table->foreignId('organization_id')->nullable();
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
            $table->string('job_type')->nullable();
            $table->text('responsible')->nullable();
            $table->integer('experience')->nullable();
            $table->boolean('urgent')->default(0);
            $table->timestamps();
        });
        
        Schema::create('scholarships', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('organization_id')->nullable();
            $table->string('degree')->nullable();
            $table->text('eligibility')->nullable();
            $table->string('qualification')->nullable();
            $table->timestamp('deadline')->nullable();
            $table->text('offer')->nullable();
            $table->string('award')->nullable();
            $table->string('available_position')->nullable();
            $table->string('image')->nullable(); 
            $table->integer('program_duration')->nullable();
            $table->string('gpa')->nullable();
            $table->string('age')->nullable();
            $table->string('location')->nullable();
            $table->string('major')->nullable();
            $table->string('english_proficiency')->nullable();
            $table->timestamps();
        });

        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->nullable();
            $table->foreignId('job_id')->nullable();
            $table->foreignId('scholarship_id')->nullable();
            $table->string('status')->nullable();
            $table->string('attach_file')->nullable();  
            $table->timestamps();
        });

        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('panel')->nullable();
            $table->timestamps();
        });

        Schema::create('roles', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('guard_name')->nullable();
            $table->timestamps();
        });

        Schema::create('role_has_permissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->nullable();
            $table->foreignId('permission_id')->nullable();
            $table->timestamps();
        });

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

        Schema::create('about_us', function (Blueprint $table) {
            $table->id();
            $table->text('content')->nullable();
            $table->text('mission')->nullable();
            $table->text('vision')->nullable();
            $table->timestamps();
        });

        
        Schema::create('members', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('position')->nullable();
            $table->string('description')->nullable();
            $table->string('contact')->nullable();
            $table->string('image')->nullable(); 
    
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
        Schema::dropIfExists('categories','organizations','jobs','scholarships',
        'clients','applications','permissions','roles','role_has_permissions',
        'resumes','about_us','members');
    }
};