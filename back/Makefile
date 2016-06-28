all:	modbus.bin modset.bin

engine.bin:	engine.bin.o
	gcc engine.bin.o -o engine.bin

modbus.bin: modbus.bin.c
	gcc -I/usr/local/include/modbus -lmodbus modbus.bin.c -o modbus.bin

modset.bin: modset.bin.c
	gcc -I/usr/local/include/modbus -lmodbus modset.bin.c -o modset.bin

control.bin:	control.bin.o
	gcc control.bin.o -o control.bin

runner.bin:	runner.bin.o
	gcc runner.bin.o -o runner.bin

install:	modbus.bin modset.bin
	cp modbus.bin modset.bin /Library/Server/Web/Data/CGI-Executables/

