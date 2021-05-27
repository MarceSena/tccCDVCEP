<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProcessValuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('process_values', function (Blueprint $table) {
            $table->id();
            $table->unsignedBiginteger('sample_id')->constrained('samples')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('process_value');
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
        Schema::dropIfExists('process_values');
    }
}
