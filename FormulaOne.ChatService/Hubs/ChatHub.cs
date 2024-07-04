
using FormulaOne.ChatService.Models;
using Microsoft.AspNetCore.SignalR;

namespace FormulaOne.ChatService.Hubs
{
    public class ChatHub : Hub
    {
        public async Task JoinChat(UserConnection conn)
        {
            await Clients.All //IClientProxy
            .SendAsync(method:"ReceiveMessage", arg1:"admin", arg2:$"{conn.Username} has joined the chat");
        }
        public async Task JoinSpecificChatRoom(string Chatroom, string Username)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName: Chatroom);
            await Clients.Group(Chatroom)//IClientProxy
            .SendAsync(method:"JoinSpecificChatRoom", arg1:"admin", arg2:$"{Username} has joined {Chatroom}");
        }
    }
}