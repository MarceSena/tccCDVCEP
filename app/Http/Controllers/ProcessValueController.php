<?php

namespace App\Http\Controllers;

use App\Models\ProcessValue;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Http;

class ProcessValueController extends Controller
{
    
    private $objValue;


    public function __construct(){
        $this->objValue = new ProcessValue();
      

    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $response = Http::get("http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1");
        
        $value = ProcessValue::create([
            'sample_id' =>$request->input('sample_id'),
            'process_value' =>$response->json(0)
        ]);
        return  redirect()->back();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ProcessValue  $processValue
     * @return \Illuminate\Http\Response
     */
    public function show(ProcessValue $processValue)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ProcessValue  $processValue
     * @return \Illuminate\Http\Response
     */
    public function edit(ProcessValue $processValue)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ProcessValue  $processValue
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProcessValue $processValue)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ProcessValue  $processValue
     * @return \Illuminate\Http\Response
     */
    public function destroy(ProcessValue $processValue)
    {
        //
    }
}
