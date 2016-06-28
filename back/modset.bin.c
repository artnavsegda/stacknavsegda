#include <stdio.h>
#include <stdlib.h>
#include <modbus.h>
#include <errno.h>

int main(int argc, char *argv[])
{
	modbus_t *mb;
	uint16_t tab_reg[256];
	uint8_t bit_reg[256];
	int rc;
	int i;
	int actual;

	mb = modbus_new_tcp("192.168.1.120", 502);
	if (modbus_connect(mb) == -1)
	{
		fprintf(stderr, "modbus connect: %s\n", modbus_strerror(errno));
		modbus_free(mb);
		return -1;
	}

	sscanf(getenv("QUERY_STRING"),"%d",&actual);
	printf("Content-type: text/plain\n\n");

	/* Read 5 registers from the address 10 */
	//rc = modbus_read_registers(mb, 100, 10, tab_reg);
	rc = modbus_write_bit(mb,100,actual);
	if (rc == -1) {
		fprintf(stderr, "write bit: %s\n", modbus_strerror(errno));
		return -1;
	}

	modbus_close(mb);
	modbus_free(mb);
}
