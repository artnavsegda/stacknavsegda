#include <stdio.h>
#include <stdlib.h>
#include <fcntl.h>
#include <sys/ioctl.h>
#include <linux/i2c-dev.h>
#include <string.h>

int main(int argc, char *argv[])
{
	int fd;
	fd = open("/dev/i2c-1",O_RDWR);
	if (fd<=1)
	{
		printf("error on device\n");
		exit(1);
	}
	int addr = 0x09;
	if (ioctl(fd,I2C_SLAVE,addr) < 0)
	{
		printf("ioctl error\n");
		exit(1);
	}
	int i,x;
	sscanf(getenv("QUERY_STRING"),"%d",&x);
	printf("Content-type: text/plain\n\n");
	printf("[");
	for (i=x; i<x+100; i++)
		printf("%d, ",i2c_smbus_read_word_data(fd,i));
	printf("%d",i2c_smbus_read_word_data(fd,x+100));
	printf("]");
	close(fd);
	return 0;
}
