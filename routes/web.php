<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', 'GangaController@index');
Route::get('/about', 'GangaController@services');
Route::get('/services', 'GangaController@activities');
Route::get('/news', 'GangaController@news');
Route::get('/contact', 'GangaController@contact');
Route::get('/donate', 'GangaController@donate');
Route::post('/contact', 'GangaController@contact')->name('contact');

Route::post('/pay', 'GangaController@pay');
Route::post('/success', 'GangaController@success')->name('payment-success');

Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});


