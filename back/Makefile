all:	engine.bin control.bin runner.bin

engine.bin:	engine.bin.o
	gcc engine.bin.o -o engine.bin

control.bin:	control.bin.o
	gcc control.bin.o -o control.bin

runner.bin:	runner.bin.o
	gcc runner.bin.o -o runner.bin

install:	engine.bin control.bin runner.bin
	cp engine.bin control.bin runner.bin /usr/lib/cgi-bin

