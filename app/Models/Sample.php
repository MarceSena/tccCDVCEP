<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Process;
use App\Models\ProcessValue;

class Sample extends Model
{
    protected $table = 'samples';
    protected $fillable = [  
        'process_id'
     ];


    public function process()
    {
        return $this->belongsTo(Process::class);
    }
    
    public function value()
    {
        return $this->hasMany(ProcessValue::class);
    }

}
