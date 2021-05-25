<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Sample;

class Process extends Model
{
    protected $table = 'processes';
    protected $fillable = [
       'name', 'obs'
   ];

   public function sample()
   {
       return $this->hasMany(Sample::class);
   }

}
