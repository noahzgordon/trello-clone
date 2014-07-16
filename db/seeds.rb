u1 = User.create(email: 'ripe@gmail.com', password: 'password')
u2 = User.create(email: 'thejamaicandave@gmail.com', password: 'password')

b1 = u1.boards.create(title: 'Workout')
b2 = u1.boards.create(title: 'Jamaica')
b3 = u2.boards.create(title: 'Bouncy')

l1 = b1.lists.create(title: 'todo')
l2 = b1.lists.create(title: 'doing')
l3 = b1.lists.create(title: 'done')

c1 = l3.cards.create(title: 'squats', description: 'feel the burn')
c2 = l3.cards.create(title: 'pushups', description: 'ooh ouch')
c3 = l3.cards.create(title: 'situps', description: 'ouchy')

c4 = l1.cards.create(title: 'squats', description: 'feel the burn')
c5 = l1.cards.create(title: 'pushups', description: 'ooh ouch')
c6 = l1.cards.create(title: 'situps', description: 'ouchy')

c7 = l2.cards.create(title: 'squats', description: 'feel the burn')
c8 = l2.cards.create(title: 'pushups', description: 'ooh ouch')
c9 = l2.cards.create(title: 'situps', description: 'ouchy')

i1 = c1.items.create(done: false, title: 'mocha')
i2 = c1.items.create(done: true, title: 'mocha')
i3 = c1.items.create(done: true, title: 'cookie')

b1.members = [u2]
b1.save
