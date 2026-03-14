/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Phone, Video, MoreVertical, Paperclip, Smile, Mic, Play, MoreHorizontal } from 'lucide-react';

const MessagesPage = () => {
    const [activeTab, setActiveTab] = useState<'All' | 'Unread'>('All');
    const [selectedChat, setSelectedChat] = useState(1);

    const chats = [
        { id: 1, name: "Julie Laya", avatar: "/assets/dashboard.jpg", lastMessage: "When will you come to pickup the Speakers on..", time: "Just Now", unreadCount: 2, status: 'online' },
        { id: 2, name: "Amber Hailly", avatar: "/assets/dashboard.jpg", lastMessage: "When will you come to pickup the Speakers on..", time: "Just Now", unreadCount: 0, status: 'offline' },
        { id: 3, name: "Mark Thompson", avatar: "/assets/dashboard.jpg", lastMessage: "Can you confirm the delivery date for the project?", time: "5 Min", unreadCount: 1, status: 'offline' },
        { id: 4, name: "Oliver Chen", avatar: "/assets/dashboard.jpg", lastMessage: "What time do we meet for the team call?", time: "15 Min", unreadCount: 5, status: 'offline' },
        { id: 5, name: "Nina Patel", avatar: "/assets/dashboard.jpg", lastMessage: "I'm still waiting for your feedback on the design.", time: "2 Hrs", unreadCount: 0, status: 'offline' },
        { id: 6, name: "Sophia Garcia", avatar: "/assets/dashboard.jpg", lastMessage: "Have you seen the updates on the last presentation?", time: "7 Days", unreadCount: 0, status: 'offline' },
        { id: 7, name: "Ethan Kim", avatar: "/assets/dashboard.jpg", lastMessage: "Please send over the final invoice by end of the day.", time: "03 Dec, 2026", unreadCount: 0, status: 'offline' },
        { id: 8, name: "Mia Wilson", avatar: "/assets/dashboard.jpg", lastMessage: "Can we reschedule our lunch for next week?", time: "05 Sep, 2026", unreadCount: 0, status: 'offline' },
        { id: 9, name: "James Lee", avatar: "/assets/dashboard.jpg", lastMessage: "The client requested a few changes to the layout.", time: "05 Sep, 2026", unreadCount: 0, status: 'offline' },
    ];

    const currentMessages = [
        { id: 1, type: 'text', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", time: "20:21", sender: 'other' },
        { id: 2, type: 'text', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do", time: "20:21", sender: 'other' },
        { id: 3, type: 'voice', duration: "02:12", time: "20:21", sender: 'other' },
    ];

    return (
        <div className="flex h-[calc(100vh-64px)] md:h-[calc(100vh-95px)] overflow-hidden font-outfit bg-white">
            {/* Sidebar */}
            <div className="w-[380px] border-r border-[#F0EFEF] flex flex-col shrink-0">
                <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-[20px] font-bold text-[#000000]">Messages</h1>
                        <button className="text-[#686262]">
                            <Search className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex gap-4 mb-4">
                        {['All', 'Unread'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab as any)}
                                className={`px-6 py-1.5 rounded-full text-[14px] font-semibold border transition-all ${activeTab === tab
                                        ? "border-[#FF3A44] text-[#FF3A44]"
                                        : "border-[#F0EFEF] text-[#686262]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto no-scrollbar">
                    <p className="px-6 text-[12px] font-medium text-[#A39E9E] mb-2 uppercase">Chats</p>
                    {chats.map((chat) => (
                        <div
                            key={chat.id}
                            onClick={() => setSelectedChat(chat.id)}
                            className={`px-6 py-4 flex gap-3 cursor-pointer transition-all border-l-2 ${selectedChat === chat.id
                                    ? "bg-[#FFF8F8] border-[#FF3A44]"
                                    : "border-transparent hover:bg-gray-50"
                                }`}
                        >
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                                    <Image src={chat.avatar} alt={chat.name} fill className="object-cover" />
                                </div>
                                {chat.status === 'online' && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#3EC300] border-2 border-white rounded-full"></div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-[14px] font-bold text-[#000000] truncate">{chat.name}</p>
                                    <span className="text-[10px] text-[#A39E9E] whitespace-nowrap">{chat.time}</span>
                                </div>
                                <div className="flex justify-between items-start gap-2">
                                    <p className="text-[12px] text-[#686262] font-medium truncate leading-tight">
                                        {chat.lastMessage}
                                    </p>
                                    {chat.unreadCount > 0 && (
                                        <div className="w-5 h-5 rounded-full bg-[#FF3A44] flex items-center justify-center shrink-0">
                                            <span className="text-[10px] text-white font-bold">{chat.unreadCount}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col bg-white">
                {/* Header */}
                <div className="px-6 py-4 border-b border-[#F0EFEF] flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden relative">
                            <Image src="/assets/dashboard.jpg" alt="Julie Laya" fill className="object-cover" />
                        </div>
                        <div>
                            <p className="text-[16px] font-bold text-[#000000]">Julie Laya</p>
                            <p className="text-[12px] text-[#A39E9E] font-medium flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#3EC300]"></span> 2h ago
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="p-2.5 rounded-xl border border-[#F0EFEF] text-[#FF3A44] hover:bg-[#FFF8F8] transition-all">
                            <Phone className="w-5 h-5" />
                        </button>
                        <button className="p-2.5 rounded-xl border border-[#F0EFEF] text-[#FF3A44] hover:bg-[#FFF8F8] transition-all">
                            <Video className="w-5 h-5" />
                        </button>
                        <button className="p-2.5">
                            <MoreVertical className="w-5 h-5 text-[#000000]" />
                        </button>
                    </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
                    {/* Date Separator */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-[#F0EFEF]"></div>
                        <span className="text-[12px] font-bold text-[#A39E9E] uppercase">Today</span>
                        <div className="flex-1 h-px bg-[#F0EFEF]"></div>
                    </div>

                    <div className="space-y-4">
                        {currentMessages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} gap-3 items-end`}>
                                {msg.sender === 'other' && (
                                    <div className="w-8 h-8 rounded-full overflow-hidden relative shrink-0">
                                        <Image src="/assets/dashboard.jpg" alt="" fill className="object-cover" />
                                    </div>
                                )}
                                <div className="flex flex-col gap-1 max-w-[70%]">
                                    {msg.type === 'text' ? (
                                        <div className={`p-4 rounded-2xl text-[14px] font-medium leading-relaxed ${msg.sender === 'me'
                                                ? "bg-[#FF3A44] text-white rounded-br-none"
                                                : "bg-[#FFF2F2] text-[#000000] rounded-bl-none"
                                            }`}>
                                            {msg.content}
                                        </div>
                                    ) : (
                                        <div className="p-4 bg-[#FFF2F2] rounded-2xl rounded-bl-none flex items-center gap-4 w-[280px]">
                                            <button className="w-10 h-10 rounded-full bg-[#FF3A44] flex items-center justify-center text-white shrink-0">
                                                <Play className="w-5 h-5 fill-white" />
                                            </button>
                                            <div className="flex-1 h-8 flex items-center gap-0.5">
                                                {[...Array(20)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-0.5 rounded-full bg-[#FF3A44]`}
                                                        style={{ height: `${Math.random() * 80 + 20}%` }}
                                                    ></div>
                                                ))}
                                            </div>
                                            <span className="px-2 py-0.5 bg-white rounded-full text-[10px] font-bold text-[#FF3A44] border border-[#F0EFEF]">
                                                {msg.duration}
                                            </span>
                                        </div>
                                    )}
                                    <span className={`text-[10px] text-[#A39E9E] font-bold ${msg.sender === 'me' ? 'text-right' : 'text-left'}`}>
                                        {msg.time}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-6 pt-0">
                    <div className="flex items-center gap-3 bg-[#F9F9F9] border border-[#F0EFEF] rounded-2xl p-2 pl-4">
                        <button className="text-[#A39E9E] hover:text-[#000000]">
                            <Paperclip className="w-5 h-5" />
                        </button>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 bg-transparent border-none outline-none text-[14px] font-medium text-[#000000] py-2"
                        />
                        <button className="text-[#A39E9E] hover:text-[#000000]">
                            <Smile className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-xl bg-[#FF3A44] flex items-center justify-center text-white shadow-lg shadow-red-200">
                            <Mic className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MessagesPage;
