import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500">
        <DirectionsBusIcon sx={{ color: "#fff", fontSize: 20 }} />
      </div>

      <span className="text-xl font-bold">
        <span className="text-violet-600">Gram</span>
        <span className="text-gray-800">bol</span>
      </span>
    </div>
  );
}
