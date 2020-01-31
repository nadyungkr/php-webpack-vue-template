<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>phpvue</title>
    </head>
    <body>
        <div id="app">
            <hello-world
                author='<?=json_encode([
                    'git'   => 'https://github.com/pronist',
                    'email' => 'pronist@naver.com'
                ])?>'
            ></hello-world>
        </div>
        <script src="app.js"></script>
    </body>
</html>
