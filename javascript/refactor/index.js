function func(s, a, b)
{
    var empty = /^$/; 
    if (s.match(empty)) {
       return -1;
    }

    var i = s.length-1;
    var aIndex = -1;
    var bIndex = -1;

        while (aIndex==-1 && bIndex==-1 && i>=0)
        {
            if (s.substring(i, i+1) == a)
                aIndex=i;
        	if (s.substring(i, i+1) == b)
                bIndex=i;
        	i--;
        }

        if (aIndex != -1)
        {
            if (bIndex == -1)
                return aIndex;
        	else
                return Math.max(aIndex, bIndex);
        }
        else
        {
            if (bIndex != -1)
                return bIndex;       
	      else
                return -1;
        }
};
