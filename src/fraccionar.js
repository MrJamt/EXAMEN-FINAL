function fraccionar(c)
{
  let lista = [];
  while(c>0)
  {
    if(c%5==0)
    {
      lista.push(5);
      c=c-5;
    }
    else if(c%2==0)
    {
      lista.push(2);
      c=c-2;
    }
    else if(c%1==0)
    {
      lista.push(1);
      c=c-1;
    }
    else if(c%0.5==0)
    {
      lista.push(0.5);
      c=c-0.5;
    }
    else if(c%0.2==0)
    {
      lista.push(0.2);
      c=c-0.2;
    }
    else c=0;
  }

  return lista;
}

export default fraccionar;
