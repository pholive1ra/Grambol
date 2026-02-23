import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";

export default function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-pink-500 flex items-center justify-center">
        <DirectionsBusIcon sx={{ color: "#fff", fontSize: 20 }} />
      </div>
      <span className="text-xl font-bold">
        <span className="text-violet-600">Rodo</span>
        <span className="text-gray-800">Bus</span>
      </span>
    </div>
  );
}
