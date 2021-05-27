<?php

namespace App\Http\Controllers;

use App\Models\Process;
use App\Models\Sample;
use App\Models\ProcessValue;

use Illuminate\Http\Request;

class ProcessController extends Controller
{

   
    private $objProcess;
    private $objSample;
    private $objValue;


    public function __construct(){
        $this->objProcess = new Process();
        $this->objSample = new Sample();
        $this->objValue = new ProcessValue();
      
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $process = $this->objProcess->All();
        return view('process/index', compact('process'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('process/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $process = Process::create($request->all());
        //$client->relAdresses()->create($input);
        return redirect('process');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Process  $process
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $process = $this->objProcess->find($id);
        $sample = $this->objSample->find($id);
        $value = $this->objValue->find($id);
        return view('process/show', compact('process', 'sample', 'value'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Process  $process
     * @return \Illuminate\Http\Response
     */
    public function edit(Process $process)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Process  $process
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Process $process)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Process  $process
     * @return \Illuminate\Http\Response
     */
    public function destroy(Process $process)
    {
        //
    }
}
