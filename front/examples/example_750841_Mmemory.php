<?php

require_once dirname(__FILE__) . '/../Phpmodbus/ModbusMaster.php';

// Create Modbus object
$ip = "192.168.1.120";
$modbus = new ModbusMaster($ip, "TCP");

try {
    // FC 1
    $coilData = $modbus->readCoils(0, 1, 5);
}
catch (Exception $e) {
    // Print error information if any
    echo $modbus;
    echo $e;
    exit;
}

?>

<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=windows-1250">
        <meta name="generator" content="PSPad editor, www.pspad.com">
        <title>WAGO 750-841 M-memory dump</title>
    </head>
    <body>
        <h1>Dump of M-memory from WAGO 750-84x series coupler.</h1>
        <ul>
            <li>PLC: 750-84x series</li>
            <li>IP: <?php echo $ip?></li>
            <li>Modbus module ID: <?php echo $moduleId?></li>
            <li>Modbus memory reference: <?php echo $reference?></li>
            <li>Modbus memory quantity: <?php echo $quantity?></li>
        </ul>

        <h2>M-memory dump</h2>

<table border="1px" width="400px">
    <tr>
        <td>Modbus address</td>
        <td>value</td>
    </tr>
    <?php
    $i = 0;
    foreach($coilData as $bytes) {
        ?>
    <tr>
        <td><?php echo $i+=1 ?></td>
        <td><?php echo (var_export($bytes)) ?></td>
    </tr>
        <?php
    }
    ?>
</table>
<?php

try {
    // FC 3
    $recData = $modbus->readMultipleRegisters(0, 8, 16);
}
catch (Exception $e) {
    echo $modbus;
    echo $e;
    exit;
}

$floatvalues = array_chunk($recData, 4);
$i = 6;
$values = array_chunk($recData, 2);

?>

        <table border="1px" width="400px">
            <tr>
                <td>Modbus address</td>
                <td>value</td>
            </tr>
            <?php
            foreach($floatvalues as $bytes) {
                ?>
            <tr>
                <td><?php echo $i+=2?></td>
                <td><?php echo PhpType::bytes2float($bytes)?></td>
            </tr>
                <?php
            }
            ?>
        </table>

        <table border="1px" width="400px">
            <tr>
                <td>Modbus address</td>
                <td>value</td>
            </tr>
            <?php
            $i = 7;
            foreach($values as $bytes) {
                ?>
            <tr>
                <td><?php echo $i+=1?></td>
                <td><?php echo PhpType::bytes2signedInt($bytes)?></td>
            </tr>
                <?php
            }


            try {
                // FC 3
                $recData = $modbus->readMultipleRegisters(0, 28, 1);
            }
            catch (Exception $e) {
                echo $modbus;
                echo $e;
                exit;
            }

            $values = array_chunk($recData, 2);

            foreach($values as $bytes) {
                ?>
            <tr>
                <td><?php echo 28 ?></td>
                <td><?php echo PhpType::bytes2signedInt($bytes)?></td>
            </tr>
                <?php
            }



            ?>
        </table>


        <?php try {
            // FC 3
            $coilData = $modbus->readCoils(0, 99, 5);
        }
        catch (Exception $e) {
            echo $modbus;
            echo $e;
            exit;
        }?>

        <table border="1px" width="400px">
            <tr>
                <td>Modbus address</td>
                <td>value</td>
            </tr>
            <?php
            $i = 98;
            foreach($coilData as $bytes) {
                ?>
            <tr>
                <td><?php echo $i+=1 ?></td>
                <td><?php echo (var_export($bytes)) ?></td>
            </tr>
                <?php
            }
            ?>
        </table>

        <h2>Modbus class status</h2>
        <?php
        echo $modbus;
        ?>

    </body>
</html>
