var original_key_value_array = [
    {name: 'Charles Thompson', address: 'Accra'},
    {name: 'Philisiah Mwaluma', address: 'Nairobi'},
    {name: 'Sadiq Okocha', address: 'Chicago'}
];

var reformatted_key_value_array = original_key_value_array.map(function (object) {
    internal_object = object.name + ' comes from ' + object.address + '.';
    return internal_object;
});

for (sentence in reformatted_key_value_array) {
    console.log(reformatted_key_value_array[sentence])
}
// console.log(original_key_value_array);
