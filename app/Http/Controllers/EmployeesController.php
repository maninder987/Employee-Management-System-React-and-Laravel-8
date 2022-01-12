<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Log;
use Exception;

class EmployeesController extends Controller
{
    /**
     * Get Employee List.
     */
    public function getEmployeeList()
    {
        try
        {
            $employees = Employee::orderBy('id', 'desc')->get();

            return response()->json($employees);
        }
        catch( \Exception $e)
        {
            Log::error($e);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    final public function getEmployeeDetails(Request $request)
    {
        try
        {
            $employeeData = Employee::findOrFail($request->get('employeeId'));

            if($employeeData)
            {
                return response()->json($employeeData);
            }
        }
        catch( \Exception $e)
        {
            Log::error($e);
        }
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    final public function updateEmployeeData(Request $request)
    {
        try
        {
            $employeeId      = $request->get('employeeId');
            $employeeName    = $request->get('employeeName');
            $employeeSalary  = $request->get('employeeSalary');

            Employee::where('id', $employeeId)->update([
                'employee_name' => $employeeName,
                'salary'        => $employeeSalary
            ]);

            return response()->json([
                'employee_name' => $employeeName,
                'salary'        => $employeeSalary
            ]);

        }
        catch( \Exception $e)
        {
            Log::error($e);
        }
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
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        try
        {
            $employeeName    = $request->get('employeeName');
            $employeeSalary  = $request->get('employeeSalary');

            Employee::create([
                'employee_name' => $employeeName,
                'salary'        => $employeeSalary
            ]);

            return response()->json([
                'employee_name' => $employeeName,
                'salary'        => $employeeSalary
            ]);

        }
        catch( \Exception $e)
        {
            Log::error($e);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Employee $employee
     * @return void
     */
    final public function destroy(Employee $employee)
    {
        try
        {
            $employee->delete();
        }
        catch( \Exception $e)
        {
            Log::error($e);
        }
    }
}
