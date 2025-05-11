<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    return Barang::all();
}

public function store(Request $request)
{
    return Barang::create($request->all());
}

public function show($id)
{
    return Barang::findOrFail($id);
}

public function update(Request $request, $id)
{
    $barang = Barang::findOrFail($id);
    $barang->update($request->all());
    return $barang;
}

public function destroy($id)
{
    return Barang::destroy($id);
}
}
