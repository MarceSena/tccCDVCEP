<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Sample;

class ProcessValue extends Model
{
    protected $table = 'process_values';
    protected $fillable = [
       'process_value', 'sample_id'
   ];
   
   public function sample()
   {
       return $this->belongsTo(Sample::class);
   }
}
