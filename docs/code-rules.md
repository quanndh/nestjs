# các rules cơ bản áp dụng cho project

## Khai báo message trả về cho client

    src/helpers/messages.ts

## PaginationArgs là class common cho các PaginationArgs khác kế thừa

## DataLoader

    - Luôn trả ra dữ liệu default [] hoặc null  không throw hoặc return Error.
    - Sử dụng dataloader để load relational field.

## Entity

    - không khai báo unique:true trong Column do khi khai báo này  tên Constaints sẽ genarate tên không có tác dụng khi xử lý conflig trong code . thay vào đó xử dụng @Unique ví dụ : @Unique('uq_medical_equipment_sku', ['sku'])

    - với các bảng không được xóa khi có dữ liệu phụ thuộc bắt buộc phải khai báo onDelete: 'RESTRICT', với dữ liệu không yêu cầu phụ thuộc thì set onDelete: 'CASCADE' hoặc NULL

    - luôn sử dụng liên kết relation giữa các bảng để đảm bảo tính chặc chẽ

    - sử dụng khai báo cascade với relation hỗ  trợ tạo dữ liệu relation tốt hơn.

    - khai báo trường require hay không require đồng nhất với trạng thái nullable ở colum

    - Hide tất cả field relational tránh earger load làm chậm query. Relational field cần được load qua Resolve Field => Dataloader
        + Example:
            @HideField()
            @ManyToOne(() => User, (user) => user.projects)
            user: User;

## Controller

    - Không xử lý logic ở controller, mọi logic cần chuyển về service tương ứng

## Service

    - Service extends từ CommonService<Repository(required), Dataloader>. Sử dụng Dataloader nếu muốn gộp findOne + cache.
    - Không truy cập đến Repository của Model khác từ service. Mọi truy cập phải thông qua service.

<span style="color:green">Do</span>

```javascript
//inside project.service.ts
const firstUser = await this.userService.findOne(id);
```

<span style="color:red">Don't</span>

```javascript
//inside project.service.ts
const firstUser = await this.userRepository.findOne(id);
```

### khai bao colume

    - emum khai báo đầy đủ type,enum,nullable:true , default value
    - example:
      @Column({
            type: 'enum',
            enum: ShoppingProposalStatusEnum,
            nullable: true,
            default: ShoppingProposalStatusEnum.DRAFT,
        })
