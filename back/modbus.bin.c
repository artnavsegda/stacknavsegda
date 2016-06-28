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

	if (argc == 1)
	{
		printf("name ip adress\n");
		exit(1);
	}

	mb = modbus_new_tcp(argv[1], 1502);
	if (modbus_connect(mb) == -1)
	{
		fprintf(stderr, "modbus connect: %s\n", modbus_strerror(errno));
		modbus_free(mb);
		return -1;
	}

	sscanf(getenv("QUERY_STRING"),"%d",&actual);
	printf("Content-type: text/plain\n\n");

	/* Read 5 registers from the address 10 */
	rc = modbus_read_registers(mb, actual, 1, tab_reg);
	if (rc == -1) {
		fprintf(stderr, "read registers: %s\n", modbus_strerror(errno));
		return -1;
	}

	for (i=0; i < rc; i++) {
		printf("%d", tab_reg[i]);
	}

	modbus_close(mb);
	modbus_free(mb);
}
