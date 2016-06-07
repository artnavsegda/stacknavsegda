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
	int addr = 0x18;
	if (ioctl(fd,I2C_SLAVE,addr) < 0)
	{
		printf("ioctl error\n");
		exit(1);
	}
	i2c_smbus_write_byte_data(fd,0x03,0x3F);
	unsigned char i;
	sscanf(getenv("QUERY_STRING"),"%d",&i);
	i2c_smbus_write_byte_data(fd,0x01,i);
	printf("Content-type: text/plain\n\n");
	//printf("%d",i2c_smbus_read_byte_data(fd,i));
	close(fd);
	return 0;
}
