# Best practice

## GraphQL

- Cần viết `DataLoader` khi `ResolveField` tránh lỗi [N+1 query](https://blog.appsignal.com/2020/06/09/n-plus-one-queries-explained.html)
- Các câu query nên đặt ngắn gọn

<span style="color:green">Do</span>

```graphql
type Query {
  """
  Get user by id
  """
  user(id: ID!): User

  """
  Pagination user
  """
  users(args: UserPaginationInput): UserConnection
}
```

<span style="color:red">Don't</span>

```graphql
type Query {
  """
  Get user by id
  """
  getUser(id: ID!): User

  """
  Pagination user
  """
  userList(args: UserPaginationInput): UserConnection
}
```

- Tạo các input type riêng

<span style="color:green">Do</span>

```graphql
type Mutation {
  """
  Create new user
  """
  createUser(input: CreateUserInput!): User
}

input CreateUserInput {
  email: String!
  password: String!
  gender: String!
}
```

<span style="color:red">Don't</span>

```graphql
type Mutation {
  """
  Create new user
  """
  createUser(email: String!, password: String!, gender: String!): User
}
```

- Luôn định nghĩa rõ ràng các field nào là `required`, field nào là `optional`
- Trường hợp update thộc tính của các field (require, data type, delete, remove, rename,...) cần báo các bên liên quan để thực hiện kiểm tra lại phụ thuộc

## Functional

- Ưu tiên sử dụng Repository thay vì QueryBuilder với TypeORM
- Sử dụng QueryBuilder cần binding data theo format của TypeORM tránh lỗi SQL Injection

<span style="color:green">Do</span>

```javascript
const firstUser = await connection
  .getRepository(User)
  .createQueryBuilder('user')
  .where('user.id = :id', { id: 1 })
  .getOne();
```

<span style="color:red">Don't</span>

```javascript
const firstUser = await connection.getRepository(User).createQueryBuilder('user').where(`user.id = ${id}`).getOne();
```

## Convention

- Không đặt tên viết hoa với các tập tin tránh lỗi `consistent-casing` và sử dụng format kebab-case

<span style="color:green">Do</span>

```
src
  entities
    user.entity.ts
    user-log.entity.ts
```

<span style="color:red">Don't</span>

```
src
  entities
    User.entity.ts
    UserLog.entity.ts
```

- Các class name nên được đặt tên unique để thuận tiện cho việc tìm kiếm và import

<span style="color:green">Do</span>

```ts
// user.resolver.ts
export class UserResolver {
  // todo something
}

// user-field.resolver.ts
export class UserFieldResolver {
  // todo something
}
```

<span style="color:red">Don't</span>

```ts
// user.resolver.ts
export class UserResolver {
  // todo something
}

// user-field.resolver.ts
export class UserResolver {
  // todo something
}
```

- Các dự án sử dụng ESLint và Prettier để kiểm tra và đồng nhất format code. (Cấu hình xem thêm tại file `.eslintrc.json` và `.prettierrc.json`)

- Luôn luôn linter code: nếu sử dụng VSCode việc linter code đã được tích hợp sẵn vào IDE

Chạy lệnh sau để kiểm tra:

```bash
yarn lint
```
