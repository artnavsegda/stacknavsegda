all:	engine.bin control.bin

engine.bin:	engine.bin.o
	gcc engine.bin.o -o engine.bin

control.bin:	control.bin.o
	gcc control.bin.o -o control.bin

install:	engine.bin control.bin
	cp engine.bin control.bin /usr/lib/cgi-bin

