<?php
echo "Namaste World\n";
$a = 12;
$b = "5";

print $b + $a . "\n"; //type coercion

var_dump((int) $b); //typecasting

class Cars
{
    public $models;
    public $colors;
    public function __construct($m, $c)
    {
        $this->models = $m;
        $this->colors = $c;
    }
    public function mssg()
    {
        foreach ($this->models as $model) {
            echo "My car is $model\n";
        }
    }
}

$myCars = new Cars(["BMW", "ODI"], 0);
var_dump($myCars);
echo $myCars->mssg();
