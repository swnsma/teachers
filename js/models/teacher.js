function Teacher(data, $http)
{
    var self = this;
    self.id = data.id;
    self.name = data.name;
    self.img = data.img;
    self.description = data.description;
    self.status = data.status;
    self.options = [];
    for(var val in data.status) {
        self.options.push(new VoteOption(data.status[val], $http));
    }
    console.log(self.options);
}