import {RequestUserController} from '../../controller/requestUserController';
import {UserController} from '../../controller/userController';
import {FbMessAPI} from '../../framework/fbMessAPI';
import {Postbacks} from '../../helper/postbacks';

export const acceptRequest = async (userId: string, requestId: string) => {
    // Kiểm tra xem có đang chat với ai khác không.
    if (await UserController.isChattingWith(userId) || await UserController.isChattingWith(requestId)) {
        await FbMessAPI.sendQuickReplyWithText(requestId, 'Bạn đang chat với người khác, có muốn dừng chat không?',
            [{
                content_type: 'text',
                title: 'Dừng chat',
                'payload': Postbacks.CancelChat,
                'image_url': 'https://img.icons8.com/cotton/2x/cancel--v1.png'
            }]);
        return;
    }
    // Delete request
    await RequestUserController.deleteRequestUser(userId, requestId);
    //Add status chatting with for both of 2 users
    await UserController.addChatWith(userId, requestId);
    await UserController.addChatWith(requestId, userId);
    const requestUser = await UserController.getUser(requestId);
    const user = await UserController.getUser(userId);
    FbMessAPI.sendText(userId, `*${requestUser.name}* đã chấp nhận trò chuyện với bạn.`);
    FbMessAPI.sendText(requestId, `Bạn đã kết nối với *${user.name}*. Say hello đi nào!`)
};

export const getAllRequest = async (userId: string, page: number = 0) => {
    try {
        const requests = await RequestUserController.getAllRequestOfUser(userId, 3, page * 3);
        if (requests.length <= 0) FbMessAPI.sendText(userId, 'Không tìm thấy ai hết!');

        let message;

        if (requests.length === 1) {
            message = {
                'attachment': {
                    'type': 'template',
                    'payload': {
                        'template_type': 'generic',
                        'elements': [
                            {
                                'title': requests[0].user.name,
                                'image_url': requests[0].user.avatar,
                                'subtitle': 'Chỉ mỗi người này thích!',
                                'buttons': [
                                    {
                                        'title': 'Nhắn tin ngay!',
                                        'type': 'postback',
                                        'payload': Postbacks.Accept + requests[0].user.userId
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        } else {
            const elements = [];
            for (const request of requests) {
                const element = {
                    'title': request.user.name,
                    'subtitle': '',
                    'image_url': request.user.avatar,
                    'buttons': [
                        {
                            'title': 'Nhắn tin ngay!',
                            'type': 'postback',
                            'payload': Postbacks.Accept + request.user.userId
                        }
                    ]
                };
                elements.push(element);
            }
            message = {
                'attachment': {
                    'type': 'template',
                    'payload': {
                        'template_type': 'list',
                        'top_element_style': 'compact',
                        elements,
                        'buttons': [
                            {
                                'title': 'Xem thêm',
                                'type': 'postback',
                                'payload': Postbacks.ViewRequests + ++page
                            }
                        ]
                    }
                }
            };
        }

        await FbMessAPI.send(userId, message);

    } catch (e) {
        console.log(e);
    }
};


