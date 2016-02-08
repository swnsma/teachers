function VoteOption(data, $http)
{
    var self = this;
    self.id = data.id;
    self.label = data.label;
    self.value = data.value;
    self.revoute = data.value==="";
    self.points = [];
    self.timeOut = "";
    for (var i = 0; i<10; i++) {
        self.points[i] =  {"checked":i === (data.value-1)};
    }
    self.vote = function(teacher, $index) {
        if(self.value!= $index+1) {
            $http.post('/vote', {id: teacher, option: self.id, value: $index+1})
                .then(
                function() {
                    self.revoute=false;
                    self.value = $index+1;
                }
            )
        }
    };
    self.enableRevote = function() {
        self.revoute=true;
    };
}