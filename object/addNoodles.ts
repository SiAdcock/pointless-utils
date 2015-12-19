const noodles: (obj: any) => any =
  function (obj: any): any {
    if (!obj.food) {
      obj.food = 'noodles'
    }

    return obj;
  };

export = noodles;
