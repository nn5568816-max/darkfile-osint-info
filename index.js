{
  "success": true,
  "brand": {
    "developer": "Developer Genius Hacker",
    "youtube": "YouTube Genius Hacker 29",
    "name": "Genius API Hub",
    "version": "1.0.0"
  },
  "endpoints": {
    "hub": "/api/hub?svc=\u003Cservice\u003E&\u003Cparams\u003E",
    "pathStyle": "/api/svc/\u003Cservice\u003E?\u003Cparams\u003E"
  },
  "services": [
    {
      "service": "player",
      "desc": "Free Fire player info",
      "params": [
        "uid",
        "region?"
      ],
      "example": "/api/hub?svc=player&uid=VALUE"
    },
    {
      "service": "guild",
      "desc": "Free Fire guild info",
      "params": [
        "guild_id",
        "region?"
      ],
      "example": "/api/hub?svc=guild&guild_id=VALUE"
    },
    {
      "service": "insta",
      "desc": "Instagram profile info",
      "params": [
        "username"
      ],
      "example": "/api/hub?svc=insta&username=VALUE"
    },
    {
      "service": "yt",
      "desc": "YouTube channel info",
      "params": [
        "channel"
      ],
      "example": "/api/hub?svc=yt&channel=VALUE"
    },
    {
      "service": "tiktok",
      "desc": "TikTok profile info",
      "params": [
        "username"
      ],
      "example": "/api/hub?svc=tiktok&username=VALUE"
    },
    {
      "service": "phone",
      "desc": "Phone number lookup",
      "params": [
        "number"
      ],
      "example": "/api/hub?svc=phone&number=VALUE"
    },
    {
      "service": "pincode",
      "desc": "Indian pincode lookup",
      "params": [
        "pincode"
      ],
      "example": "/api/hub?svc=pincode&pincode=VALUE"
    },
    {
      "service": "like",
      "desc": "Send likes to FF UID",
      "params": [
        "uid",
        "server_name?"
      ],
      "example": "/api/hub?svc=like&uid=VALUE"
    },
    {
      "service": "add",
      "desc": "Send friend request",
      "params": [
        "uid",
        "password",
        "friend_uid"
      ],
      "example": "/api/hub?svc=add&uid=VALUE&password=VALUE&friend_uid=VALUE"
    },
    {
      "service": "remove",
      "desc": "Remove friend",
      "params": [
        "uid",
        "password",
        "friend_uid"
      ],
      "example": "/api/hub?svc=remove&uid=VALUE&password=VALUE&friend_uid=VALUE"
    },
    {
      "service": "friends",
      "desc": "Get friends list",
      "params": [
        "uid",
        "password"
      ],
      "example": "/api/hub?svc=friends&uid=VALUE&password=VALUE"
    },
    {
      "service": "join",
      "desc": "Join guild",
      "params": [
        "guild_id",
        "uid",
        "password"
      ],
      "example": "/api/hub?svc=join&guild_id=VALUE&uid=VALUE&password=VALUE"
    },
    {
      "service": "leave",
      "desc": "Leave guild",
      "params": [
        "guild_id",
        "uid",
        "password"
      ],
      "example": "/api/hub?svc=leave&guild_id=VALUE&uid=VALUE&password=VALUE"
    },
    {
      "service": "ai",
      "desc": "AI chat (pollinations)",
      "params": [
        "q"
      ],
      "example": "/api/hub?svc=ai&q=VALUE"
    },
    {
      "service": "ghost",
      "desc": "Ghost join (self-hosted)",
      "params": [
        "teamcode",
        "ghostname"
      ],
      "example": "/api/hub?svc=ghost&teamcode=VALUE&ghostname=VALUE"
    }
  ],
  "meta": {
    "total": 15,
    "served_at": "2026-10-19T15:10:32.526Z"
  }
}
