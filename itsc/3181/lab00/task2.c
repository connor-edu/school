#include <stdio.h>

int IntegerIsPrime(int i)
{
  int IsPrime = 1;
  if (i < 2)
  {
    IsPrime = 0;
  }
  else
  {
    for (int j = 2; j < i; j++)
    {
      if (i % j == 0)
      {
        IsPrime = 0;
      }
    }
  }
  return IsPrime;
}

void PrintPrimes(int max)
{
  for (int i = 0; i <= max; i++)
  {
    if (IntegerIsPrime(i))
    {
      printf("%i ", i);
    }
  }
}

int main()
{
  int input;
  printf("Please enter a number: ");
  int r = scanf("%i", &input);
  if (r == 0)
  {
    printf("There was a problem.\n");
  }
  else
  {
    PrintPrimes(input);
  }
  printf("\n");
}