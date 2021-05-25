<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Sample;

class Value extends Model
{
    protected $table = 'values';
    protected $fillable = [
       'value'
   ];
   
   public function sample()
   {
       return $this->belongsTo(Sample::class);
   }

}
