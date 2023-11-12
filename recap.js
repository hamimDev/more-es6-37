const friendName1 = {
    Name: 'shihab',
    age: 20
}
const friendName2 = {
    Name: 'Jihad',
    age: 19
}
const friendName3 = {
    Name: 'Jahidul',
    age: 26
}
const friendName4 = {
    Name: 'Nobin',
    age: 23
}

const friends = [friendName1, friendName2, friendName3, friendName4];

const maxAge = Math.max(...friends.map(friend => friend.age));
const oldestFriends = friends.filter(friend => friend.age === maxAge);

oldestFriends.forEach(friend => {
    console.log(`Name: ${friend.Name}, Age: ${friend.age}`);
});

